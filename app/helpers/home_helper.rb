module HomeHelper
    def dropdown_menu_items
        [
            {
            column: "first-column",
            items: [
                { text: "Populares", href: "https://www.crunchyroll.com/pt-br/videos/popular" },
                { text: "Novidades", href: "https://www.crunchyroll.com/pt-br/videos/new" },
                { text: "A-Z", href: "https://www.crunchyroll.com/pt-br/videos/alphabetical" },
                { text: "Simulcasts da Temporada", href: "https://www.crunchyroll.com/pt-br/simulcasts/seasons/fall-2024" },
                { text: "Calendário de Lançamentos", href: "https://www.crunchyroll.com/pt-br/simulcastcalendar" },
                { text: "Videoclipes & Shows", href: "https://www.crunchyroll.com/pt-br/music" }
            ]
            },
            {
            column: "genres-section",
            title: "Gêneros",
            items: [
                { text: "Ação", href: "https://www.crunchyroll.com/pt-br/videos/action" },
                { text: "Música", href: "https://www.crunchyroll.com/pt-br/videos/music" },
                { text: "Shounen", href: "https://www.crunchyroll.com/pt-br/videos/shonen" },
                { text: "Aventura", href: "https://www.crunchyroll.com/pt-br/videos/adventure" },
                { text: "Romance", href: "https://www.crunchyroll.com/pt-br/videos/romance" }
            ]
            },
            {
            column: "genres-section",
            items: [
                { text: "Slice-of-Life", href: "https://www.crunchyroll.com/pt-br/videos/slice-of-life" },
                { text: "Comédia", href: "https://www.crunchyroll.com/pt-br/videos/comedy" },
                { text: "Ficção Científica", href: "https://www.crunchyroll.com/pt-br/videos/sci-fi" },
                { text: "Esportes", href: "https://www.crunchyroll.com/pt-br/videos/sports" },
                { text: "Drama", href: "https://www.crunchyroll.com/pt-br/videos/drama" }
            ]
            },
            {
            column: "genres-section",
            items: [
                { text: "Seinen", href: "https://www.crunchyroll.com/pt-br/videos/seinen" },
                { text: "Sobrenatural", href: "https://www.crunchyroll.com/pt-br/videos/supernatural" },
                { text: "Fantasia", href: "https://www.crunchyroll.com/pt-br/videos/fantasy" },
                { text: "Shoujo", href: "https://www.crunchyroll.com/pt-br/videos/shojo" },
                { text: "Suspense", href: "https://www.crunchyroll.com/pt-br/videos/thriller" }
            ]
            }
        ]
    end
end
