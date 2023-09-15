import SlotType from "./agendaSlotTypes"

export default function(agendaConfigData, speakersConfigData) {
  return agendaConfigData.time_slots.map((slot, index) => {
    const content = agendaConfigData.tracks.map(track => {
      const track_content = track.content_in_slots[index]
      const empty = { type: SlotType.TEXT, content: "" }

      if (!track_content || !track_content.type) return empty

      if (track_content.type === SlotType.SPEAKER)
        return {
          type: track_content.type,
          content: speakersConfigData.find(
            speaker => speaker.slug === track_content.content
          ),
        }

      if (track_content.type === SlotType.SPEAKER_GROUP)
        return {
          type: track_content.type,
          content: track_content.content
            .split("+")
            .map(slug =>
              speakersConfigData.find(speaker => speaker.slug === slug)
            ),
        }

      return {
        type: track_content.type,
        content: track_content.content,
      }
    })
    content.unshift(slot)

    return content
  })
}
