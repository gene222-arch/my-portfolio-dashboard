export const set = (name: string, value: string, expirationDate: string): void => 
{
    const expiresAt = new Date(expirationDate).toUTCString();
    document.cookie = `${ name } = ${ value };expires=${ expiresAt }; path=/`
}
 
export const get = (name: string): string|null =>
{
    const cookieName = `${ name }=`;
    const cookies = document.cookie.split(';');

    for(let i = 0; i < cookies.length; i++) 
    {
        let cookie = cookies[i];

        while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length);

        if (cookie.indexOf(cookieName) === 0) 
        {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    
    return null;
}

export const has = (name: string): boolean => get(name) ? true : false;

export const removeToken = () => document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";