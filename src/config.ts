export default class Config {
    static get isDevelopment(): boolean {
        return process.env.NODE_ENV === 'development';
    }
    static get RequestInfoUrl(): string {
        return this.isDevelopment
        ? (window as any).VUE_APP_DEV_BASE_API
        : (window as any).VUE_APP_BUILD_BASE_API;
    }
}
