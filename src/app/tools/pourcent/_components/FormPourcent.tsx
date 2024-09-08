"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export default function FormPourcent({ setValue }) {
  const schema = yup.object({
    inputUser: yup
      .number()
      .required("Une valeur doit être saisie")
      .positive("Le pourcentage doit être positif")
      .typeError("Saisir un nombre"),
    purcent: yup
      .number()
      .required("Un pourcentage doit être saisis")
      .positive("Le pourcentage doit être positif")
      .typeError("Saisir un nombre"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function submit(values) {
    setValue(values);
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="">
      <div className="my-3 flex flex-col gap-y-2">
        <Label htmlFor="value">Saisir une valeur</Label>
        <Input type="number" {...register("inputUser")} />
        <p className="text-xs font-bold text-red-500">
          {errors.inputUser?.message}
        </p>
      </div>
      <div className="my-3 flex flex-col gap-y-2">
        <Label htmlFor="value">Saisir un pourcentage</Label>
        <Input type="number" {...register("purcent")} />
        <p className="text-xs font-bold text-red-500">
          {errors.purcent?.message}
        </p>
      </div>
      <div className="my-3 flex justify-center">
        <Button>Calculer</Button>
      </div>
    </form>
  );
}
