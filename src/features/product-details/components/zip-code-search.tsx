"use client";

import { useState } from "react";
import Cleave from "cleave.js/react";
import { getAddressByZipCode } from "@/actions/get-address-by-zipcode";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";

export function ZipCodeSearch() {
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState<string | null>(null);

  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: getAddressByZipCode,
    onSuccess: (response) => {
      setAddress(
        `${response.street}, ${response.neighborhood} - ${response.city}/${response.state}`
      );
    },
    onError: () => {
      setAddress(null);
    },
  });

  async function handleSubmit() {
    if (zipCode.length !== 9) return;
    await mutateAsync(zipCode.replace("-", ""));
  }

  return (
    <div className="w-full">
      <label>Entrega</label>
      <Cleave
        options={{ delimiters: ["-"], blocks: [5, 3], numericOnly: true }}
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        placeholder="CEP"
        className="border w-full p-2 rounded border-neutral-900/40"
      />

      <button
        onClick={handleSubmit}
        className="bg-neutral-900 flex gap-2 items-center justify-center text-white w-full mt-2 rounded py-2 cursor-pointer disabled:bg-neutral-900/50 disabled:cursor-not-allowed"
        disabled={zipCode.length !== 9 || isPending}
      >
        {isPending && <LoaderCircle className="animate-spin size-4" />}
        Calcular Frete
      </button>

      {address && <div className="mt-2 max-w-72">{address}</div>}
      {error && <div className="mt-2 text-red-600">Erro ao pesquisar CEP</div>}
    </div>
  );
}
