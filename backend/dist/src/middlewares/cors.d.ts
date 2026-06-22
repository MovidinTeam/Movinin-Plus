import cors from 'cors';
/**
 * CORS middleware.
 *
 * @export
 * @returns {*}
 */
declare const _default: () => (req: cors.CorsRequest, res: {
    statusCode?: number | undefined;
    setHeader(key: string, value: string): any;
    end(): any;
}, next: (err?: any) => any) => void;
export default _default;
