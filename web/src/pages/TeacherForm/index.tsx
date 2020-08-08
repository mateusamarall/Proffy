import React from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import warningIcon from "../../assets/images/icons/warning.svg";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";
import "./styles.css";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <TextArea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a auala</legend>

          <Select
            name="subject"
            label="Matéria"
            options={[{ value: "Artes", label: "Artes" }]}
          />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button">+ Novo Horário</button>
          </legend>
          <div className="schedule-item">
            <Select
              name="week_day"
              label="dia da semana"
              options={[
                { value: "0", label: "Domingo" },
                { value: "1", label: "Segunda-Feira" },
                { value: "2", label: "Terça-Feira" },
                { value: "3", label: "Quarta-Feira" },
                { value: "4", label: "Quinta-Feira" },
                { value: "5", label: "Sexta-Feira" },
                { value: "6", label: "Sábado" },
              ]}
            />
            <Input name="from" label="Das" type="time" />
            <Input name="from" label="Até" type="time" />
          </div>
        </fieldset>
        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar Cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
