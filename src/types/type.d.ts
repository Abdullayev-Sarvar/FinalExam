export type SuspenseComponentProps = {
    children: React.ReactNode
    fallback: React.ReactNode
}

export type ContainerProps = {
    children: React.ReactNode
}

export type apiProp = {
    args: any
    dispatch: any
    api: any
    extraOptions: any
}

export type productProps = {
    readonly id:                 number;
    readonly brand:              string;
    readonly name:               string;
    readonly price:              string;
    readonly price_sign:         string;
    readonly currency:           string;
    readonly image_link:         string;
    readonly product_link:       string;
    readonly website_link:       string;
    readonly description:        string;
    readonly rating:             null;
    readonly category:           string;
    readonly product_type:       string;
    readonly tag_list:           string[];
    readonly created_at:         Date;
    readonly updated_at:         Date;
    readonly product_api_url:    string;
    readonly api_featured_image: string;
    readonly product_colors:     any[];
}