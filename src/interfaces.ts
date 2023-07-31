interface Products {
    id: number;
    name: string;
    price: number;
    weight: number;
    section: "food";
    calories: number | null | undefined;
    expirationDate: Date;
}

export default  Products