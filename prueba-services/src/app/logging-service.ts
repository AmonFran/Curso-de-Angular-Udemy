export class Loggingservice {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}