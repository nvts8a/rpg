type Quality = {
  label: string,
  positive: boolean,
  value: number,
  weight: Array<string>
  description: string,
  gameEffect: string
} // WEIGHTS: S A T F

let qualityMap = (setQualityList: Function): void => {
  fetch('qualities.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((json) => setQualityList(new Map(Object.entries(json))))
    .catch(setQualityList(new Map<string, Quality>));
}

export type { Quality };
export { qualityMap };