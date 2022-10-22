import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Button";
import { StyledInput } from "../../Input/style";
import { Label } from "../../Label";
import { StyledDiv, StyledModalDiv, StyledSelect } from "./style";
import { formTechSchema } from "../../../validation";

import { useContext } from "react";
import { TechsContext } from "../../../contexts/TechsContext/TechsContext";

import { StyledTitleHTwo } from "../../../styles/typography";
import { useClickClose } from "../../../hook/useClickClose";
import { AuthenticationContext } from "../../../contexts/UserContext/AuthContext";

export interface IDataCreateTech {
  title: string;
  status: string;
}

export interface IRef {
  ref?:
    | ((instance: HTMLDivElement | null) => void)
    | React.RefObject<HTMLDivElement>
    | null
    | undefined
    | string;
}

export const ModalRegisterTech = () => {
  const { setCurrentModal } = useContext(AuthenticationContext);
  const { createTech } = useContext(TechsContext);
  const modalRef = useClickClose(() => {
    setCurrentModal(false);
  });
  const { register, handleSubmit } = useForm<IDataCreateTech>({
    resolver: yupResolver(formTechSchema),
  });

  return (
    <StyledModalDiv>
      <StyledDiv ref={modalRef}>
        <div>
          <StyledTitleHTwo fontSize={24}>cadastrar Tecnologia</StyledTitleHTwo>
          <button type="button" onClick={() => setCurrentModal(true)}>
            x
          </button>
        </div>

        <form onSubmit={handleSubmit(createTech)}>
          <Label htmlFor={"title"}>Nome</Label>
          <StyledInput
            type="text"
            id="title"
            placeholder="Tecnologia"
            {...register("title")}
          />

          <Label htmlFor={"status"}>Selecionar status</Label>
          <StyledSelect id="status" {...register("status")}>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediario</option>
            <option value="avancado">Avançado</option>
          </StyledSelect>

          <Button type="submit">Cadastrar Tecnologia</Button>
        </form>
      </StyledDiv>
    </StyledModalDiv>
  );
};
