export declare const getToken: () => Promise<any>;
export declare const createOrder: (bookingId: string, amount: number, currency: string, name: string, description: string, countryCode: string) => Promise<any>;
export declare const getOrder: (orderId: string) => Promise<any>;
