"use server";

import axios from "axios";

type HttpAddressResponse = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: string
};

type AddressResponse = {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
};

export async function getAddressByZipCode(
  zipCode: string
): Promise<AddressResponse> {
  const result = await axios.get<HttpAddressResponse>(
    `https://viacep.com.br/ws/${zipCode}/json/`
  );
  
  if (result.data.erro === 'true') {
    throw new Error('Invalid zipCode')
  }
  
  return {
    street: result.data.logradouro,
    neighborhood: result.data.bairro,
    city: result.data.localidade,
    state: result.data.uf,
  };
}
