import TodoService from "./TodoService";



export default class TodoController {
    public async message(req: any, res: any) {
        const service = new TodoService()
        const message = await service.getMessage();
        return res.send(message);
    }

    public async add(req: any, res: any) {

    }

    public async all(req: any, res: any) {

    }

    public async one(req: any, res: any) {

    }

    public async remove(req: any, res: any) {

    }
}