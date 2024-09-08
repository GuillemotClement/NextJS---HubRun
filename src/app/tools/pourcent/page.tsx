"use client";
import { useEffect, useState } from "react";
import FormPourcent from "./_components/FormPourcent";
import { calculPourcentage } from "@/lib/tools";
import ShowResult from "./_components/ShowResult";

export default function Pourcent() {
  const [inputUser, setInputUser] = useState({});
  const [result, setResult] = useState(null);

  const { purcent, inputUser: myValue } = inputUser;

  useEffect(() => {
    if (purcent !== undefined && myValue !== undefined) {
      setResult(calculPourcentage(purcent, myValue));
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
