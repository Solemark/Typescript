interface IArtifact {
    name: string
    max_rarity: number
    "2-piece_bonus": string
    "4-piece_bonus": string
}

export const SortArtifacts = (artifacts: IArtifact[], rarity: string, name: string): IArtifact[] => {
    var sortedArtifacts: IArtifact[] = []
    artifacts.map((artifact: IArtifact) => {
        if (name === '') {
                if (artifact.max_rarity === Number(rarity) || rarity === 'All') {
                    sortedArtifacts.push(artifact)
                }
        } else if (artifact.name.toLowerCase() === name.toLowerCase()) {
            sortedArtifacts.push(artifact)
        }
        return artifact
    })
    return sortedArtifacts
}