import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Perguntas = () => {
  return (
    <div className="mt-20 min-h-screen">
      <div className="max-w-4xl flex-center flex-col bg-black mx-auto p-5 text-white font-poppins gap-5">
        <h1 className="text-5xl font-lora underline text-center">
          PERGUNTAS FREQUENTES
        </h1>
        <Accordion type="single" collapsible className="w-full mb-5">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Por quanto tempo vou ter acesso aos cursos?
            </AccordionTrigger>
            <AccordionContent className="text-green-500">
              Você terá acesso aos cursos durante o período de 12 meses e poderá
              renovar a assinatura pelo mesmo valor.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Como vou receber o produto após realizar a compra?
            </AccordionTrigger>
            <AccordionContent className="text-green-500">
              Assim que o pagamento for aprovado através da Hotmart, você
              receberá um e-mail com as credenciais para ter acesso aos cursos
              nesta plataforma. Caso tenha qualquer dúvida, entrar em contato:
              <span className="underline ml-1">
                treinamentoalboredosupi@gmail.com
              </span>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Como saber se estes cursos são para o meu nível?
            </AccordionTrigger>
            <AccordionContent className="text-green-500">
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
            <AccordionTrigger>
              Eu vou ter contato com os professores durante o curso?
            </AccordionTrigger>
            <AccordionContent className="text-green-500">
              Sim! Os 300 primeiros alunos terão acesso direto aos professores
              através de um grupo exclusivo de WhatsApp durante o período de
              assinatura (12 meses). Nele, você poderá interagir com os
              professores e demais alunos com suas dúvidas referentes as aulas e
              exercícios.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              O conteúdo é ao vivo ou gravado?
            </AccordionTrigger>
            <AccordionContent className="text-green-500">
              Você receberá todo o conteúdo dos cursos gravado com altíssima
              qualidade. Além disso, poderá participar das aulas ao vivo toda
              semana com nossa equipe de professores.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Estes cursos terão atualizações?
            </AccordionTrigger>
            <AccordionContent className="text-green-500">
              Estes cursos foram desenvolvidos da maneira mais completa
              possível, mas todos os meses serão disponibilizados cursos novos
              sem nenhum custo adicional aos Alunos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              Estes cursos serão por este preço para sempre?
            </AccordionTrigger>
            <AccordionContent className="text-green-500">
              Os alunos desta turma, terão acesso a um desconto em sua
              assinatura. Faça sua matrícula e garanta este preço exclusivo,
              pois a qualquer momento o preço pode voltar a ser o original.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              Quais as formas de pagamento disponíveis?{" "}
            </AccordionTrigger>
            <AccordionContent className="text-green-500">
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
