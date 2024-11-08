module HomeHelper
    def dropdown_menu_items
        [
            {
            column: "first-column",
            items: [
                { text: "Populares", href: "https://www.crunchyroll.com/pt-br/videos/popular" },
                { text: "Novidades", href: "#" },
                { text: "A-Z", href: "#" },
                { text: "Simulcasts da Temporada", href: "#" },
                { text: "Calendário de Lançamentos", href: "#" },
                { text: "Videoclipes & Shows", href: "#" }
            ]
            },
            {
            column: nil, # Linha divisória
            divider: true
            },
            {
            column: nil,
            title: "Gêneros",
            items: [
                { text: "Ação", href: "#" },
                { text: "Aventura", href: "#" },
                { text: "Comédia", href: "#" },
                { text: "Drama", href: "#" },
                { text: "Fantasia", href: "#" }
            ]
            },
            {
            column: nil,
            items: [
                { text: "Música", href: "#" },
                { text: "Romance", href: "#" },
                { text: "Ficção Científica", href: "#" },
                { text: "Seinen", href: "#" },
                { text: "Shoujo", href: "#" }
            ]
            },
            {
            column: nil,
            items: [
                { text: "Shounen", href: "#" },
                { text: "Slice-of-Life", href: "#" },
                { text: "Esportes", href: "#" },
                { text: "Sobrenatural", href: "#" },
                { text: "Suspense", href: "#" }
            ]
            }
        ]
    end
end
