/// <reference types="vite/client" />

declare module '*&as=picture&placeholder' {
    const value: {
        sources: Record<string, string>;
        img: { src: string; w: number; h: number };
        placeholder: string;
    };
    export default value;
}

declare module '*&as=picture' {
    const value: {
        sources: Record<string, string>;
        img: { src: string; w: number; h: number };
    };
    export default value;
}
