interface ProductFormData {
    name: string;
    price: number;
    visitors: number;
    sales: number;
    month: string;
    dateModified: string;
    [key: string]: any;
}

export type ProductTableData = Array<ProductFormData & {
    _id: string;
    [key: string]: any;
}>;

interface VisitorFormData {
    visitors: number;
    location: string;
    device: string;
    premiumUserNumber: number;
    month: string;
    dateModified: string;
    [key: string]: any;
}

export type VisitorTableData = Array<VisitorFormData & {
    _id: string;
    [key: string]: any;
}>;

export type FormData = ProductFormData | VisitorFormData;

export type TableData = Array<Record<string, string>>;

interface FormControl  {
    id: string;
    type?: string;
    placeholder: string;
    label: string;
    componentType: string;
    options?: Array<Record<string, string>>;
}

export type FormControls = Array<FormControl>;

interface TabelCell {
    id: string;
    label: string;
}

export type TableCells = Array<TabelCell>;

