"use client";
import { api } from "../../lib/api";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import Cookie from "js-cookie";

export default function DeleteMemory({ id }: any) {
  const router = useRouter();
  const token = Cookie.get("token");

  const deleteMemory = async () => {
    const res = await api.delete(`memories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res) {
      router.push("/");
    }
  };

  return (
    <span
      onClick={deleteMemory}
      className="flex cursor-pointer flex-row items-center text-sm text-red-500 hover:text-red-400"
    >
      <Trash className="mr-2 h-4 w-4" />
      Deletar memória
    </span>
  );
}
