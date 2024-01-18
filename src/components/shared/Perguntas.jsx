import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BsQuestionCircleFill } from "react-icons/bs"

const Perguntas = () => {
  return (
    <div className="mt-20 pb-10">
      <div className="max-w-4xl flex-center flex-col mx-auto p-5 text-white font-merriweather gap-5 rounded-md border-2 border-[#F2EFDF]">
        <div className="flex-center gap-3 mb-10">
          <span>
            <BsQuestionCircleFill size={50} color="#F2EFDF" />
          </span>
          <h1 className="text-3xl md:text-5xl font-dmSerif underline text-center text-[#F2EFDF]">
            PERGUNTAS FREQUENTES
          </h1>
          <span>
            <BsQuestionCircleFill size={50} color="#F2EFDF" />
          </span>
        </div>
        <Accordion type="single" collapsible className="w-full text-xl">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold text-[#F2EFDF]">
              Por quanto tempo vou ter acesso aos cursos?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#F2F2F2]">
              Você terá acesso aos cursos durante o período de 12 meses e poderá
              renovar a assinatura pelo mesmo valor.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold text-[#F2EFDF]">
              Como vou receber o produto após realizar a compra?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#F2F2F2]">
              Assim que o pagamento for aprovado através da Hotmart, você
              receberá um e-mail com as credenciais para ter acesso aos cursos
              nesta plataforma. Caso tenha qualquer dúvida, entrar em contato:
              <span className="underline ml-1">
                treinamentoalboredosupi@gmail.com
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold text-[#F2EFDF]">
              Como saber se estes cursos são para o meu nível?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#F2F2F2]">
              Estes cursos foram estruturados para ajudar jogadores de TODOS os
              níveis no xadrez, mesmo aqueles que ainda não sabem mexer as peças
              ou nunca tiveram contato com o jogo. Eles abordam desde os
              problemas que iniciantes passam no jogo, até jogadores de
              competição, chegando até mesmo no nível de Grande Mestre. Tudo
              isso de maneira bem estruturada nos módulos divididos por faixa de
              rating e por temas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold text-[#F2EFDF]">
              Eu vou ter contato com os professores durante o curso?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#F2F2F2]">
              Sim! Os 300 primeiros alunos terão acesso direto aos professores
              através de um grupo exclusivo de WhatsApp durante o período de
              assinatura (12 meses). Nele, você poderá interagir com os
              professores e demais alunos com suas dúvidas referentes as aulas e
              exercícios.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-bold text-[#F2EFDF]">
              O conteúdo é ao vivo ou gravado?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#F2F2F2]">
              Você receberá todo o conteúdo dos cursos gravado com altíssima
              qualidade. Além disso, poderá participar das aulas ao vivo toda
              semana com nossa equipe de professores.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="font-bold text-[#F2EFDF]">
              Estes cursos terão atualizações?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#F2F2F2]">
              Estes cursos foram desenvolvidos da maneira mais completa
              possível, mas todos os meses serão disponibilizados cursos novos
              sem nenhum custo adicional aos Alunos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="font-bold text-[#F2EFDF]">
              Estes cursos serão por este preço para sempre?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#F2F2F2]">
              Os alunos desta turma, terão acesso a um desconto em sua
              assinatura. Faça sua matrícula e garanta este preço exclusivo,
              pois a qualquer momento o preço pode voltar a ser o original.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="font-bold text-[#F2EFDF]">
              Quais as formas de pagamento disponíveis?{" "}
            </AccordionTrigger>
            <AccordionContent className="text-lg text-[#F2F2F2]">
              Você poderá efetuar o pagamento por cartão, pix ou boleto
              bancário. Para outras formas de pagamento, entre em contato com
              <span className="underline ml-1">
                treinamentoalboredosupi@gmail.com
              </span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default Perguntas
