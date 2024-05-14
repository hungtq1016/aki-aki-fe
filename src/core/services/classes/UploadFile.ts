import { urlBuilder } from "../utils/util.url";

export default class UploadAdapter {
    private loader: any;
    private xhr: XMLHttpRequest | null = null;
    private apiUrl: string;

    constructor(loader: any, apiUrl: string) {
        this.loader = loader;
        this.apiUrl = apiUrl;
    }

    upload(): Promise<any> {
        return this.loader.file
            .then((file: any) => new Promise((resolve, reject) => {
                this._initRequest();
                this._initListeners(resolve, reject, file);
                this._sendRequest(file);
            }));
    }

    abort(): void {
        if (this.xhr) {
            this.xhr.abort();
        }
    }

    private _initRequest(): void {
        const xhr = this.xhr = new XMLHttpRequest();
        xhr.open('POST', urlBuilder(this.apiUrl), true);
        xhr.responseType = 'json';
    }

    private _initListeners(resolve: any, reject: any, file: any): void {
        const xhr = this.xhr!;
        const loader = this.loader;
        const genericErrorText = `Couldn't upload file: ${file.name}.`;

        xhr.addEventListener('error', () => reject(genericErrorText));
        xhr.addEventListener('abort', () => reject());
        xhr.addEventListener('load', () => {
            const response = xhr.response;

            if (!response || response.error) {
                return reject(response && response.error ? response.error.message : genericErrorText);
            }

            resolve({
                default: response.url
            });
        });

        if (xhr.upload) {
            xhr.upload.addEventListener('progress', evt => {
                if (evt.lengthComputable) {
                    loader.uploadTotal = evt.total;
                    loader.uploaded = evt.loaded;
                }
            });
        }
    }

    private _sendRequest(file: any): void {
        const data = new FormData();
        data.append('file', file);
        this.xhr!.send(data);
    }
}
