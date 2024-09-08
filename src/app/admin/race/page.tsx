"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { Prisma } from "@prisma/client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { prisma } from "../../../lib/prisma";

export default function Race() {
  // const schema = yup.object({
  //   name: yup.string().required("Saisir une valeur"),
  // });

  const { register, handleSubmit } = useForm();

  async function submit(value) {
    try {
      const newRace = await prisma.race.create({
        data: {
          name: value.name,
        },
      });
      if (Response.ok) {
        console.log(newRace.json());
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="">
      <h2>Ajouter une nouvelle course</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            className="rounded-lg border px-2 py-1"
            {...register("name")}
          />
        </div>
        <div className="my-4 flex justify-center">
          <button className="rounded-lg bg-blue-400 px-2 py-2 uppercase text-white hover:bg-blue-600 active:bg-blue-700">
            Soumettre
          </button>
        </div>
      </form>
    </div>
  );
}
