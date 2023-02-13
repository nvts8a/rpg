type Specialization = {
  labels: string
}

type Secondary = {
  description: string
}

type Skill = {
  label: string;
  specializations: Map<string, Specialization>;
  untrained: boolean;
  linkedAttribute: string;
  secondaries: Map<string, Secondary>;
  weight: Array<'a'|'f'|'s'|'t'>;

  description: string
}

let skillMap = (setSkillList: Function): void => {
  fetch('data/skills.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((json) => setSkillList(new Map(Object.entries(json))))
    .catch(setSkillList(new Map<string, Skill>));
}

export type { Skill };
export { skillMap };