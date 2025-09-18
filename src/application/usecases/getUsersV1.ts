import User from "@/domain/User";

export class GetUsersV1 {
    execute(): string[] {
        // In v1 liefern wir nur Namen als string[]
        const users: User[] = [
            { id: "1", name: "Alice" },
            { id: "2", name: "Bob" },
        ];
        return users.map(u => u.name);
    }
}
