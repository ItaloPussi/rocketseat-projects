import { ClipboardList } from "lucide-react";

export function EmptyList(){
    return (
        <div className="mt-6 border-t border-gray-400 rounded-lg py-16 px-6 flex items-center justify-center flex-col gap-4">
            <ClipboardList
                className="h-14 w-14 text-gray-400"
                strokeWidth={1}
            />
            <div className="flex flex-col text-gray-300 leading-[1.4] gap-0.5">
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    )
}