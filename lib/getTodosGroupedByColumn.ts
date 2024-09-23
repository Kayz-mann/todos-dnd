import { databases } from "@/appwrite"

export const getTodosGroupedByColumn = async () => {
    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!
    );

    const todos = data.documents;

    console.log(todos)

    // map each status to an array of object where one status can contain multiple todos
    const columns: Map<TypedColumns, Column> = todos.reduce((acc: any, todo) => {
        if (!acc.get(todo.status)) {
            acc.set(todo.status, {
                id: todo.status,
                todos: [],
            })

        }

        acc.get(todo.status)!.todos.push({
            $id: todo.$id,
            $createdAt: todo.$createdAt,
            title: todo.title,
            status: todo.status,
            //get image if it exists on todo
            ...(todo.image && { image: JSON.parse(todo.image) })
        });

        return acc;
    }, new Map<TypedColumns, Column>())

    //if columns doesnt have inprogress, todo and done add them with empty todos
    const columnTypes: TypedColumns[] = ["todo", "inprogress", "done"];

    for (const columnType of columnTypes) {
        if (!columns.get(columnType)) {
            columns.set(columnType, {
                id: columnType,
                todos: [],
            })
        }
    }


    //sort columns by column type

    const sortedColumns: Map<TypedColumns, Column> = new Map(
        Array.from(columns.entries()).sort((a, b) => (
            columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
        ))
    );


    const board: Board = {
        columns: sortedColumns,
    }

    console.log('board info',board)


    return board;

}