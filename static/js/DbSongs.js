let urlPage = location.href
urlPage = urlPage.substring(0, urlPage.lastIndexOf("/"))

export const songsDb = [
    {
        Id: 0,
        Name: "Otonoke",
        PathMusic: `${urlPage}/assets/songs/Otonoke (Opening Theme to DAN DA DAN).FLAC`,
        PathImage: `${urlPage}/assets/icons/otonoke-transformed.jpeg`,
        BackgroundColor: " #f1a11d",
        Color: "4px 3px rgba(0, 0, 0, 0.341)"
    },
    {
        Id: 1,
        Name: "APT",
        PathMusic: `${urlPage}/assets/songs/ROSÉ & Bruno Mars - APT. (live from 2024 MAMA AWARDS).FLAC`,
        PathImage: `${urlPage}/assets/icons/AptImage.jpg`,
        BackgroundColor: " #f16689",
        Color: "4px 3px rgba(#f16689)"
    },
    {
        Id: 2,
        Name: "Die With A Smile",
        PathMusic: `${urlPage}/assets/songs/Lady Gaga, Bruno Mars - Die With A Smile (Official Music Video).FLAC`,
        PathImage: `${urlPage}/assets/icons/DieWithASmile.jpg`,
        BackgroundColor: " #027cb4",
        Color: "#053148"
    },
    {
        Id: 3,
        Name: "Judas - 7MZ",
        PathMusic: `${urlPage}/assets/songs/7 Minutoz - JUDAS.FLAC`,
        PathImage: `${urlPage}/assets/icons/Judas.png`,
        BackgroundColor: " #171620",
        Color: "#000000"
    },
    {
        Id: 4,
        Name: "Kaikai Kitan",
        PathMusic: `${urlPage}/assets/songs/KaikaiKitan.FLAC`,
        PathImage: `${urlPage}/assets/icons/kaikaikitan.jpeg`,
        BackgroundColor: "rgba(199, 20, 47, 0.89)",
        Color: "#d91d01"
    }
];
