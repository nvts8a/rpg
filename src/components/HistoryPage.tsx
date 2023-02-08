/* eslint-env browser */
import {FunctionComponent} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {Tooltip} from '@mui/material';
import {CharacterMultiLineTextField, CharacterSliderField} from './Feilds';
import PageLayout from '../layouts/PageLayout';
import {useLocalStorage} from '../utils/react-local-storage';

const HistoryPage: FunctionComponent = () => {
  const [born, setBorn] = useLocalStorage('h.born', '');
  const [raised, setRaised] = useLocalStorage('h.raised', '');
  const [trained, setTrained] = useLocalStorage('h.trained', '');
  const [now, setNow] = useLocalStorage('h.now', '');
  const [slider, setSlider] = useLocalStorage('name', 10);


  return (
    <PageLayout>
      <Grid width='100%' container spacing={2}>
        <Tooltip title={tooltips.born}>
          <Grid xs={6}>
            <CharacterMultiLineTextField label="Where was your character born?"
              value={born} setFunction={setBorn}/>
          </Grid>
        </Tooltip>
        <Tooltip title={tooltips.raised}>
          <Grid xs={6}>
            <CharacterMultiLineTextField label="Where was your character raised?"
              value={raised} setFunction={setRaised}/>
          </Grid>
        </Tooltip>
        <Tooltip title={tooltips.trained}>
          <Grid xs={6}>
            <CharacterMultiLineTextField label="Where was your character trained?"
              value={trained} setFunction={setTrained}/>
          </Grid>
        </Tooltip>
        <Tooltip title={tooltips.now}>
          <Grid xs={6}>
            <CharacterMultiLineTextField label="Where is your character now?"
              value={now} setFunction={setNow}/>
          </Grid>
        </Tooltip>
        <Grid xs={6}>
          <CharacterSliderField label='Slider' value={slider} setFunction={setSlider} />
        </Grid>
      </Grid>
    </PageLayout>
  );
}

const tooltips = {
  born: '    Country of origin can be important. It creates ' +
    'a starting point for a life that might continue to ' +
    'revolve around where it started, or could be a never-ending ' +
    'quest to escape that place. In Shadowrun, ' +
    'you also aren’t just limited to countries, as ' +
    'megacorporations also have citizens and territory. ' +
    'Look over some of the world background in The ' +
    'Life You Have Left (p. 14), or sit down and talk to ' +
    'your gamemaster to get a feel for the world. \n\n' +
    '    Your birthplace could be a scar or a sterling ' +
    'point in your past, but either way it’s something ' +
    'to shape the way you walk, talk, and act toward ' +
    'others who may have similar or different origin ' +
    'stories.',
  raised: '    Once you answer the first question you know ' +
    'where your character was born, but perhaps equally ' +
    'important, if not more so, is where were you ' +
    'raised. Being raised on the streets, no matter where ' +
    'you are, is a different life from having a consistent ' +
    'roof over your head and food on your plate. ' +
    'Was your life spent in the depths of the metroplex, ' +
    'where everything is open all the time and life runs ' +
    'round the clock? Did you get a nice upbringing in a ' +
    'suburban refuge, spending every Saturday morning' +
    'taking care of the yard while wishing you lived in ' +
    'the hustle and bustle of the big city because everything ' +
    'closed so early? Maybe your character grew ' +
    'up in a place with a skewed definition of “family,” ' +
    'such as a neighborhood run by organized crime or ' +
    'a cult. Neither would leave you totally right in the ' +
    'head. Did you run free and wild through a massive ' +
    'self-sufficient arcology where you and your friends ' +
    'always talked about sneaking onto level 234, but ' +
    'only Billy ever tried and he was never heard from ' +
    'again? Were you isolated at a secluded corp enclave ' +
    'somewhere, with only a handful of other ' +
    'kids, and everyone knew everyone else? \n\n' +
    '    Each option changes who you might have encountered, ' +
    'what kind of values you were surrounded ' +
    'by, how much street savvy you have, ' +
    'what education you had access to, and a plethora ' +
    'of other details you can flesh out to make a deeper ' +
    'character. \n\n' +
    '    Remember that you can feel free to change ' +
    'where you were raised from where you were ' +
    'born, as your parents were traded, or extracted, ' +
    'between megacorps. They could have been hired ' +
    'and changed from UCAS to Ares citizens, open- ' +
    'ing doors never before available to you. Or maybe ' +
    'they were cast out of a corp, and suddenly had to ' +
    'live as strangers in a strange land, thrown out of ' +
    'the corporate bosom that used to keep them safe.',
  trained: '    Who trained you, where is that person/group ' +
    'now, and are they a possible loose end? Are they after ' +
    'you because of some perceived or real betrayal? ' +
    'Were they using you as a test subject, and now you’ve ' +
    'got skills and ’ware to accompany your ever-present ' +
    'feelings of mistrust and betrayal? Are you self-trained ' +
    'and always acting with a chip on your shoulder because ' +
    'cause no one trusts someone who taught themselves? \n\n' +
    '    Looking back and thinking about how you' +
    'learned what you learned can also be a good way of ' +
    'creating some roleplaying biases. Were you trained ' +
    'by a megacorp and therefore indoctrinated to hate ' +
    'the other megas? Were you trained by a government' +
    'and feel like the underdog trying valiantly to ' +
    'protect your former country from enemies foreign ' +
    'and domestic? Were you taught on the street and ' +
    'learned everything the hard way?',
  now: '    Think about why you run the shadows. Is it the ' +
    'rush? Is it the cash? Is it the only choice you have? ' +
    'Is it revenge? Is it to impress someone? Is it to fight ' +
    'the Man? Is it to regain the favor of your corporate ' +
    'masters? Is it to bring down the megacorporate ' +
    'machine? \n\n' +
    '    Take a little time to think about your character ' +
    'as a person and develop a sense of motivation. Once ' +
    'you get to the table, every job might not be your ' +
    'cup of soykaf, but you’re part of a team. You’ve got ' +
    'a job to do. When one of those jobs comes around ' +
    'that is right up your dark and shadowy alley, how ' +
    'far will you be willing to go to see it succeed?',
}

export default HistoryPage;