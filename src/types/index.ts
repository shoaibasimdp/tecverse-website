export interface Service {
    id: string;
    title: string;
    description: string;
    icon?: string;
}

export interface AISolution {
    id: string;
    title: string;
    description: string;
    features: string[];
    icon?: string;
    image: string;
}

export interface NavLink {
    href: string;
    label: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    company?: string;
    message: string;
}

export interface ApiHealthResponse {
    status: string;
    company: string;
    focus: string;
}
