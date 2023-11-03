"use client";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import axios from "axios";

const CepAutocomplete = () => {
  const [cep, setCep] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [dataCep, setDataCep] = useState({
    "cep": null,
    "logradouro": null,
    "complemento": null,
    "bairro": null,
    "localidade": null,
    "uf": null,
    "ibge": null,
    "gia": null,
    "ddd": null,
    "siafi": null
  })
  const onChange = (event) => setCep(event.target.value);

  const GetDadosCep = async cep => {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
    setDataCep(data)
  }

  useEffect(() => {
    const cepNumbers = cep.replace(/\D/g, "");
    if (cepNumbers != "") {
      let validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        setIsLoading(true)
        GetDadosCep(cep)
      }
    }
  }, [cep]);

  return (
    <>
        <div class="relative mb-4 flex flex-col gap-2">
           <Input label={"CEP"} onChange={onChange} type={"number"}  />
        </div>

        {
            isLoading ?
            <section>
                <Input  label={"Rua"} value={dataCep.logradouro ? dataCep.logradouro : ""}  />
                <Input  label={"Complemento"} value={dataCep.complemento ? dataCep.complemento : ""}  />
                <Input  label={"Bairro"} value={dataCep.bairro ? dataCep.bairro : ""}   />
                <Input  label={"Localidade"} value={dataCep.localidade ? dataCep.localidade : ""}  />
            </section>
            : null
        }


    </>
  );
};

export default CepAutocomplete;
