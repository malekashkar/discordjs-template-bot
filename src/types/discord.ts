/* Commands Endpoint */
export interface Choice {
    name: string;
    name_localizations?: string;
    value: string;
}

export interface Option {
    type: number;
    name: string;
    name_localizations?: string;
    description: string;
    description_localizations?: string;
    required?: boolean;
    choices?: Choice[];
    options?: Option[];
    channel_types?: number[];
    min_value?: number;
    max_value?: number;
    min_length?: number;
    max_length?: number;
    autocomplete?: boolean;
}

export interface CommandInterface {
    id: string;
    type?: number;
    application_id: string;
    guild_id?: string;
    name: string;
    name_localizations?: string;
    description: string;
    description_localizations?: string;
    options?: Option[];
    default_member_permissions?: string;
    dm_permission?: boolean;
    default_permission?: boolean;
    version: string;
}