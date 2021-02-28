import { Meta } from './Meta';

export class Film {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly actors: string[],
        public readonly date: Date,
        public readonly meta: Meta,
        public readonly synopsis: string
    ) {}
}