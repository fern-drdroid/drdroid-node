export class EventQueue<T> {
    private events: T[] = [];
    private timeout: NodeJS.Timeout | undefined;

    constructor(private readonly send: (events: T[]) => void, private readonly timeoutMs: number) {
        process.on("beforeExit", this.flush.bind(this));
        process.on("uncaughtExceptionMonitor", this.flush.bind(this));
    }

    public addEvent(event: T): void {
        if (this.timeout == null) {
            this.timeout = setTimeout(this.flush.bind(this), this.timeoutMs);
        }
        this.events.push(event);
    }

    public flush(): void {
        if (this.timeout != null) {
            clearTimeout(this.timeout);
        }

        void this.send(this.events);
        this.events = [];
    }
}
