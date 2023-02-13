type Quality = {
  label: string;
  positive: boolean;
  value: number;
  range?: number;
  weight: Array<'a'|'f'|'s'|'t'>;
  description: string;
  gameEffect: string;
}

let qualityMap = (setQualityList: Function): void => {
  fetch('data/qualities.json', {
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