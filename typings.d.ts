interface Board {
    columns: Map<TypedColumns, Column>;
}

type TypedColumns = "todo" | "inprogress" | "done"

interface Column {
    id: TypedColumns
    todos: Todo[]
}

interface Todo extends Models.Document {
    $id: string;
    $created_at: string;
    title: string;
    status: TypedColumns;
    image?: Image;
}

interface Image {
    bucketId: string;
    fileId: string;
}