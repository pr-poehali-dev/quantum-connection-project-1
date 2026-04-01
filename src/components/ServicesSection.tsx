import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Sparkles",
    title: "Детейлинг кузова",
    description:
      "Комплексная полировка и восстановление лакокрасочного покрытия. Устраняем царапины, потёртости и помутнения. Ваш автомобиль снова блестит как с завода.",
  },
  {
    icon: "Shield",
    title: "Керамическое покрытие",
    description:
      "Профессиональная нанокерамика с защитой на 2–5 лет. Надёжная защита от грязи, UV-излучения, химии и мелких царапин. Кузов всегда выглядит свежим и чистым.",
  },
  {
    icon: "Layers",
    title: "Оклейка плёнкой (PPF)",
    description:
      "Прозрачная защитная плёнка сохраняет кузов от сколов и царапин. Идеальна для капота, бамперов и зеркал. Сохраняет оригинальный вид и стоимость авто.",
  },
  {
    icon: "Wind",
    title: "Химчистка салона",
    description:
      "Глубокая очистка сидений, ковров, потолка и пластика. Устраняем запахи, пятна и загрязнения. Салон снова как новый — свежий и приятный.",
  },
  {
    icon: "Droplets",
    title: "Мойка и уход",
    description:
      "Бесконтактная и ручная мойка с использованием профессиональной химии. Чернение резины, обработка стёкол — полный уход снаружи и изнутри.",
  },
  {
    icon: "Star",
    title: "Предпродажная подготовка",
    description:
      "Комплексная подготовка автомобиля к продаже. Полировка, химчистка, керамика — делаем всё, чтобы ваше авто произвело максимальное впечатление и получило лучшую цену.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наша экспертиза
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          В чем мы <span className="text-primary">сильны</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Полный спектр услуг по уходу и защите вашего автомобиля. Используем только профессиональные материалы и технологии.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} className="h-6 w-6" fallback="Star" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
