export default class TodoService {
    public async getMessage(): Promise<String> {
        return "Todo Page";
    }

    public addTodo(): String {
        return "Add todo";
    }

    public allTodo(): String {
        return "All todos";
    }

    public oneTodo(): String {
        return "One todo";
    }

    public removeTodo(): String {
        return "Remove todo";
    }
}

