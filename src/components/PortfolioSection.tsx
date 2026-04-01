import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Керамическое покрытие BMW M5",
    category: "Керамика + полировка",
    image: "/smartwheels.jpg",
    description:
      "Полная двухступенчатая полировка кузова с устранением голограмм и лёгких царапин. Нанесение профессиональной нанокерамики с гарантией 3 года. Результат — глубокий глянец и надёжная защита.",
    tags: ["Полировка", "Керамика", "BMW", "Детейлинг"],
  },
  {
    title: "PPF + детейлинг Porsche Cayenne",
    category: "Защитная плёнка PPF",
    image: "/autopoetsbedrijf-tahsin.jpg",
    description:
      "Оклейка капота, переднего бампера и зеркал прозрачной защитной плёнкой PPF. Дополнительно: химчистка салона из алькантары, обработка кожи, чернение резины.",
    tags: ["PPF", "Химчистка", "Porsche", "Салон"],
  },
  {
    title: "Предпродажная подготовка Mercedes",
    category: "Комплексная подготовка",
    image: "/murat-sahin-portfolio.jpg",
    description:
      "Полный комплекс услуг для подготовки к продаже: одношаговая полировка, детейлинг кузова, химчистка салона, обработка стёкол гидрофобным составом. Автомобиль ушёл на 15% дороже рынка.",
    tags: ["Полировка", "Детейлинг", "Mercedes", "Продажа"],
  },
  {
    title: "Восстановление Tesla Model 3",
    category: "Восстановительная полировка",
    image: "/omgekeerde-stemwijzer.jpg",
    description:
      "Трёхступенчатая коррекция лакокрасочного покрытия с глубокими царапинами. Устранение 90% дефектов кузова. Финальное покрытие жидким стеклом для долгосрочной защиты.",
    tags: ["Коррекция", "Жидкое стекло", "Tesla", "Восстановление"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши работы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Смотрите сами — каждый автомобиль получает индивидуальный подход и максимальный результат.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => {}}
                  >
                    Смотреть детали <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
