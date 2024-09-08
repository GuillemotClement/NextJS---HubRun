"use client";
import { useEffect, useState } from "react";
import FormPourcent from "./_components/FormPourcent";
import { calculPourcentage } from "@/lib/tools";
import ShowResult from "./_components/ShowResult";

interface inputUser {
  purcent: number;
  inputUser: number;
}

export default function Pourcent() {
  const [inputUser, setInputUser] = useState<inputUser>({
    purcent: 0,
    inputUser: 0,
  });
  const [result, setResult] = useState<number | null>(null);

  const { purcent = 0, inputUser: myValue = 0 } = inputUser;

  useEffect(() => {
    if (purcent !== undefined && myValue !== undefined) {
      const calculatedResult = calculPourcentage(purcent, myValue);
      if (typeof calculatedResult === "number") {
        setResult(calculatedResult);
      } else {
        console.error("calculPourcentage ne retourne pas un nombre valide");
      }
    }
  }, [purcent, myValue]);

  return (
    <div className="mx-auto flex w-96 flex-col items-center border">
      <h2 className="my-4 text-2xl">Calculateur selon %</h2>
      <FormPourcent setValue={setInputUser} />
      {result && <ShowResult value={result} />}
    </div>
  );
}
