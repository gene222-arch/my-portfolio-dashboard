export const getErrorMessage = (error: any) => 
{
    if (error instanceof Error) {
        return error.message;
    }

    return error;
};

export const hasError = (error: any, key: string = ''): boolean => 
{
    if (typeof error === 'string' && !key) return Boolean(error);

    if (typeof error === 'object' && key) return Boolean(error[key]);

    return false;
};

export const getError = (error: any, key: string = ''): string => 
{
    if (typeof error === 'string' && !key) return error;

    if (typeof error === 'object' && key) return error[key];

    return '';
};