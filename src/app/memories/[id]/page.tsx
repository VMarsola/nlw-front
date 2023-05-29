import { cookies } from "next/headers";
import Link from "next/link";
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br";
import { ArrowLeft } from "lucide-react";

import { api } from "@/lib/api";
import DeleteMemory from "@/components/DeleteMemory";

dayjs.locale(ptBR);

interface Memory {
  id: string;
  coverUrl: string;
  content: string;
  isPublic: boolean;
  createdAt: string;
  userId: string;
}

export default async function Page({ params }: any) {
  const token = cookies().get("token")?.value;
  const res = await api.get(`memories/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const memory: Memory = res.data;
  const url = memory.coverUrl.split("/");

  return (
    <div key={memory.id} className="space-y-4">
      <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
        {dayjs(memory.createdAt).format("D[ de ]MMMM[, ]YYYY")}
      </time>
      <img
        src={"http://localhost:3333/" + "uploads/" + url[url.length - 1]}
        alt=""
        width={592}
        height={280}
        className="aspect-video w-full rounded-lg object-cover"
      />
      <p className="text-lg leading-relaxed text-gray-100">{memory.content}</p>

      <div className="flex flex-row items-center justify-between">
        <Link
          href={`/`}
          className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>
        <DeleteMemory id={...params.id} />
      </div>
    </div>
  );
}
