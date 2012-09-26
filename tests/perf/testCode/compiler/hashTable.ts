///<reference path='typescript.ts' />

module TypeScript {
    export var HashSmallSize = 7;
    export var HashMediumSize = 16;
    export var HashLargeSize = 128;

    export interface IEquatable {
        getHashCode: number;
    }

    export class StringHashEntry {
        public next: StringHashEntry;

        constructor (public key: string, public data) { }
    }

    export function StringHashFn(key: string): number {
        var val: number = 0;
        for (var i: number = 0; i < key.length; i++) {
            val = (val << i) ^ key.charCodeAt(i);
        }
        if (val > 0) {
            return val;
        }
        else {
            return -val;
        }
    }

    // do not remove: here for comparison 
    export class StringHashTableOld {
        public itemCount = 0;
        public table = new StringHashEntry[];

        constructor (public size: number) { 
            for (var j: number = 0; j < this.size; j++) {
                this.table[j] = null;
            }        
        }

        public getAllKeys(): string[]{
            var result: string[] = [];
            for (var i = 0; i < this.size; i++) {
                for (var current = this.table[i]; current != null ; current = current.next) {
                    result[result.length] = current.key;
                }
            }
            return result;
        }


        public add(key: string, data): bool {
            var current: StringHashEntry;
            var entry: StringHashEntry = new StringHashEntry(key, data);
            var val: number = StringHashFn(key);
            val = val % this.size;

            for (current = this.table[val]; current != null ; current = current.next) {
                if (key == current.key) {
                    return false;
                }
            }
            entry.next = this.table[val];
            this.table[val] = entry;
            this.itemCount++;
            return true;
        }

        public map(fn: (k: string, v, c) => void , context) {
            for (var i = 0; i < this.size; i++) {
                for (var current = this.table[i]; current != null ; current = current.next) {
                    fn(current.key, current.data, context);
                }
            }
        }

        public census() {
            var current: StringHashEntry;
            var pop = 0;
            for (var i = 0; i < this.size; i++) {
                for (current = this.table[i]; current != null ; current = current.next) {
                    pop++;
                }
            }
            return pop;
        }

        public every(fn: (k: string, v, c) => bool, context) {
            for (var i = 0; i < this.size; i++) {
                for (var current = this.table[i]; current != null ; current = current.next) {
                    if (!fn(current.key, current.data, context)) {
                        return false;
                    }
                }
            }
            return true;
        }

        public some(fn: (k: string, v, c) => bool, context) {
            for (var i = 0; i < this.size; i++) {
                for (var current = this.table[i]; current != null ; current = current.next) {
                    if (fn(current.key, current.data, context)) {
                        return true;
                    }
                }
            }
            return false;
        }

        public count(): number { return this.itemCount };

        public lookup(key: string) {
            var current: StringHashEntry;
            var val = StringHashFn(key);
            val = val % this.size;
            for (current = this.table[val]; current != null ; current = current.next) {
                if (key == current.key) {
                    return (current.data);
                }
            }
            return (null);
        }
    }

    export class BlockIntrinsics {
        public prototype = undefined;
        public toString = undefined;
        public toLocaleString = undefined;
        public valueOf = undefined;
        public hasOwnProperty = undefined;
        public propertyIsEnumerable = undefined;
        public isPrototypeOf = undefined;

        constructor () {
            // initialize the 'constructor' field
            this["constructor"] = undefined;
        }
    }

    export interface IHashTable {
        getAllKeys(): string[];
        add(key: string, data): bool;
        addOrUpdate(key: string, data): bool;
        map(fn: (k: string, v, c) => void , context): void;
        every(fn: (k: string, v, c) => bool, context): bool;
        some(fn: (k: string, v, c) => bool, context): bool;
        count(): number;
        lookup(key: string): any;
    }

    export class StringHashTable implements IHashTable {
        public itemCount = 0;
        public table = <any>(<any> new BlockIntrinsics());

        public getAllKeys(): string[]{
            var result: string[] = [];
            for (var k in this.table) {
                if (this.table[k] != undefined) {
                    result[result.length] = k;
                }
            }
            return result;
        }

        public add(key: string, data): bool {
            if (this.table[key] != undefined) {
                return false;
            }
            this.table[key] = data;
            this.itemCount++;
            return true;
        }

        public addOrUpdate(key: string, data): bool {
            if (this.table[key] != undefined) {
                this.table[key] = data;
                return false;
            }
            this.table[key] = data;
            this.itemCount++;
            return true;
        }

        public map(fn: (k: string, v, c) => void , context) {
            for (var k in this.table) {
                var data = this.table[k];
                if (data != undefined) {
                    fn(k, this.table[k], context);
                }
            }
        }

        public every(fn: (k: string, v, c) => bool, context) {
            for (var k in this.table) {
                var data = this.table[k];
                if (data != undefined) {
                    if (!fn(k, this.table[k], context)) {
                        return false;
                    }
                }
            }
            return true;
        }

        public some(fn: (k: string, v, c) => bool, context) {
            for (var k in this.table) {
                var data = this.table[k];
                if (data != undefined) {
                    if (fn(k, this.table[k], context)) {
                        return true;
                    }
                }
            }
            return false;
        }

        public count(): number { return this.itemCount; }

        public lookup(key: string) {
            var data = this.table[key];
            if (data != undefined) {
                return data;
            }
            else {
                return (null);
            }
        }
    }

    // The resident table is expected to reference the same table object, whereas the 
    // transientTable may reference different objects over time
    // REVIEW:  WARNING:  For performance reasons, neither the primary nor secondary table may be null
    export class DualStringHashTable implements IHashTable {

        public insertPrimary = true;

        constructor (public primaryTable: IHashTable,
                                        public secondaryTable: IHashTable) { }

        public getAllKeys(): string[]{
            return this.primaryTable.getAllKeys().concat(this.secondaryTable.getAllKeys());
        }

        public add(key: string, data): bool {
            if (this.insertPrimary) {
                return this.primaryTable.add(key, data);
            }
            else {
                return this.secondaryTable.add(key, data);
            }
        }

        public addOrUpdate(key: string, data): bool {
            if (this.insertPrimary) {
                return this.primaryTable.addOrUpdate(key, data);
            }
            else {
                return this.secondaryTable.addOrUpdate(key, data);
            }
        }

        public map(fn: (k: string, v, c) => void , context) {
            this.primaryTable.map(fn, context);
            this.secondaryTable.map(fn, context);
        }

        public every(fn: (k: string, v, c) => bool, context) {
            return this.primaryTable.every(fn, context) && this.secondaryTable.every(fn, context);
        }

        public some(fn: (k: string, v, c) => bool, context) {
            return this.primaryTable.some(fn, context) || this.secondaryTable.some(fn, context);
        }

        public count() {
            return this.primaryTable.count() + this.secondaryTable.count();
        }

        public lookup(key: string) {
            var data = this.primaryTable.lookup(key);
            if (data != undefined) {
                return data;
            }
            else {
                return this.secondaryTable.lookup(key);
            }
        }
    }

    export function numberHashFn(key: number): number {
        var c2 = 0x27d4eb2d; // a prime or an odd constant
        key = (key ^ 61) ^ (key >>> 16);
        key = key + (key << 3);
        key = key ^ (key >>> 4);
        key = key * c2;
        key = key ^ (key >>> 15);
        return key;
    }

    export function combineHashes(key1: number, key2: number) {
        return key2 ^ ((key1 >> 5) + key1);
    }

    export class HashEntry {
        public next: HashEntry;

        constructor (public key, public data) { }
    }

    export class HashTable {
        public itemCount: number = 0;
        public table = new HashEntry[];

        constructor (public size: number, public hashFn: (key) =>number,
                    public equalsFn: (key1, key2) =>bool) {
            for (var i: number = 0; i < this.size; i++) {
                this.table[i] = null;
            }
        }

        public add(key, data): bool {
            var current: HashEntry;
            var entry: HashEntry = new HashEntry(key, data);
            var val: number = this.hashFn(key);
            val = val % this.size;

            for (current = this.table[val]; current != null ; current = current.next) {
                if (this.equalsFn(key, current.key)) {
                    return false;
                }
            }
            entry.next = this.table[val];
            this.table[val] = entry;
            this.itemCount++;
            return true;
        }

        public remove(key) {
            var current: HashEntry;
            var val: number = this.hashFn(key);
            val = val % this.size;
            var result = null;
            var prevEntry: HashEntry = null;

            for (current = this.table[val]; current != null ; current = current.next) {
                if (this.equalsFn(key, current.key)) {
                    result = current.data;
                    this.itemCount--;
                    if (prevEntry != null) {
                        prevEntry.next = current.next;
                    }
                    else {
                        this.table[val] = current.next;
                    }
                    break;
                }
                prevEntry = current;
            }
            return result;
        }

        public count(): number { return this.itemCount; }

        public lookup(key) {
            var current: HashEntry;
            var val: number = this.hashFn(key);
            val = val % this.size;
            for (current = this.table[val]; current != null ; current = current.next) {
                if (this.equalsFn(key, current.key)) {
                    return (current.data);
                }
            }
            return (null);
        }
    }

}