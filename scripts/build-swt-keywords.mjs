/**
 * Build swt_pt1-keywords.json from curated Q|A map and validate verbatim.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DUMP = path.join(__dirname, "swt-questions-dump.json");
const OUT = path.join(__dirname, "swt_pt1-keywords.json");

const KEYWORDS = {
  "1": "Q: high-level test planning | A: overall scope · objectives of testing",
  "2": "Q: ready for release | A: exit criteria · objectives",
  "3": "Q: checking against requirements | A: Verification",
  "4": "Q: test planning and control | A: Managing resources · responsibilities",
  "5": "Q: test conditions role | A: define what is to be tested · test objectives",
  "6": "Q: test cases developed prioritized | A: Test implementation and execution",
  "7": "Q: psychological factors ignored | A: conflicts · inefficiencies · testing process",
  "8": "Q: implementation execution activity | A: test environments · configuring test tools",
  "9": "Q: pesticide paradox practice | A: update and introduce new tests · uncover more defects",
  "10": "Q: self and independent testing | A: strengths of both approaches · effective testing process",
  "11": "Q: creativity role | A: uncover defects · not apparent · scripted test cases",
  "12": "Q: regression testing purpose | A: recent changes · existing functionality",
  "13": "Q: exhaustive testing impossible | A: critical · high-risk areas",
  "14": "Q: review objectives criteria deliverables | A: Test Closure",
  "15": "Q: risk in testing | A: possibility · undesirable outcome",
  "16": "Q: defines a defect | A: flaw in the system · cause it to fail",
  "17": "Q: high-level planning resources | A: necessary resources · adequately allocated",
  "18": "Q: testing and quality assurance | A: forms part · quality assurance activities",
  "19": "Q: recording test results | A: Test Implementation and Execution",
  "20": "Q: end-to-end scenarios purpose | A: simulate real-world usage · fully integrated environment",
  "21": "Q: same tests repeatedly | A: Pesticide paradox",
  "22": "Q: system testing scenarios | A: End-to-end scenarios",
  "23": "Q: absence-of-errors fallacy | A: Defect fixing alone · does not ensure · meets user needs",
  "24": "Q: presence not absence | A: Testing shows presence of defects",
  "25": "Q: ongoing quality assurance | A: detect and correct defects · over time",
  "26": "Q: defect clustering influence | A: focus efforts · most defects arise",
  "27": "Q: absence-of-errors fallacy quality | A: meet requirements · fail to meet user needs",
  "28": "Q: effective testing outcome | A: Reduced risk · operational software",
  "29": "Q: evaluate against exit criteria | A: Evaluating exit criteria and reporting",
  "30": "Q: clear objectives significance | A: structured · focused testing effort",
  "31": "Q: context dependent testing | A: Different contexts · different testing approaches",
  "32": "Q: set up test environment | A: Test implementation and execution",
  "33": "Q: test cases from conditions | A: Test Analysis and Design",
  "34": "Q: mistakes lead to defects | A: incorrect implementation · software changes",
  "35": "Q: test closure goal | A: archive results · learn from the test process",
  "36": "Q: NOT factor testing necessity | A: Perfect software design",
  "37": "Q: respectful communication role | A: effective feedback · improves the development process",
  "38": "Q: compliance testing | A: complies with regulatory standards · requirements",
  "39": "Q: environment set-up implementation | A: ready for executing test cases",
  "40": "Q: functions conform requirements | A: Functional Testing",
  "41": "Q: pesticide paradox refers | A: diminishing effectiveness · same set of tests repeatedly",
  "42": "Q: critical success factor psychology | A: clear objectives",
  "43": "Q: assumptions and blind spots | A: overlook defects",
  "44": "Q: exhaustive testing impossible why | A: All combinations · not feasible to test",
  "45": "Q: component testing also known | A: Unit Testing",
  "46": "Q: test analysis and design | A: detailed test designs · test cases",
  "47": "Q: test conditions identified | A: Test analysis and design",
  "48": "Q: end-to-end scenarios benefit | A: fully integrated environment · operates correctly",
  "49": "Q: testing shows presence | A: defects are present · not that they are absent",
  "50": "Q: test strategies developed when | A: test planning and control",
  "51": "Q: independent testing preferred | A: eliminates all potential biases",
  "52": "Q: absence-of-errors fallacy suggests | A: meets requirements · not be what users need",
  "53": "Q: independent testing important | A: objective assessment",
  "54": "Q: early testing rationale | A: as early as possible · software development lifecycle",
  "55": "Q: environment supports test cases | A: Test implementation and execution",
  "56": "Q: exhaustive testing impractical | A: not feasible · except for trivial cases",
  "57": "Q: non-functional characteristic | A: response time · system",
  "58": "Q: test closure aspect | A: lessons learned · test artifacts",
  "59": "Q: early test design V-Model | A: integrates testing · requirements gathering · design phases",
  "60": "Q: defects cause harm | A: financial loss · injury · environmental damage",
  "61": "Q: maintenance testing technique | A: Automated regression testing",
  "62": "Q: impact analysis role | A: impact of changes · affected areas are tested",
  "63": "Q: environment verified correctness | A: Test implementation and execution",
  "64": "Q: heuristic technique example | A: Boundary Value Analysis",
  "65": "Q: independent testing psychological | A: objective view · project pressures",
  "66": "Q: quality assurance focuses | A: meets user expectations · performs as intended",
  "67": "Q: testers developers relationships | A: constructive feedback · defects",
  "68": "Q: Principle 1 presence defects | A: defects are present · cannot prove · no defects",
  "69": "Q: confidentiality in testing | A: protect sensitive information · during testing",
  "70": "Q: psychology defect reporting | A: how defects are perceived · addressed by the team",
  "71": "Q: psychological differences benefit | A: communication · collaboration strategies",
  "72": "Q: test closure begins | A: Meeting the exit criteria",
  "73": "Q: thorough testing benefit | A: free of critical defects · meets user needs",
  "74": "Q: early testing benefit | A: defects early · cheaper to fix",
  "75": "Q: Defect Clustering suggests | A: small number of modules",
  "76": "Q: user involvement acceptance | A: meets their needs · requirements",
  "77": "Q: integration testing large goal | A: interactions between · systems or subsystems",
  "78": "Q: confirms preexisting beliefs | A: Confirmation Bias",
  "79": "Q: planning managing uncertainties | A: potential risks · mitigation strategies",
  "80": "Q: psychological factors benefit | A: interaction · effectiveness · testing team",
  "81": "Q: large-scale integration verify | A: Data is correctly exchanged · appropriate protocols · interfaces",
  "82": "Q: risk mitigation focus | A: before they impact users",
  "83": "Q: implementation execution essential | A: Executing test cases · planned procedures",
  "84": "Q: effective communication testing | A: articulating findings · advocating for quality",
  "85": "Q: psychological aspects help | A: collaborative · effective testing environment",
  "86": "Q: defect clustering focus | A: historically shown · most defects",
  "87": "Q: first fundamental test activity | A: Test planning",
  "88": "Q: LEAST improved by testing | A: user interface color scheme",
  "89": "Q: environmental conditions impact | A: influence the outcome · hardware to fail",
  "90": "Q: consider software context | A: influences the risk · approach to testing",
  "91": "Q: stubs and drivers phase | A: Integration Testing in the Small",
  "92": "Q: Defect clustering meaning | A: small number of modules",
  "93": "Q: high-level planning resources | A: Personnel · tools · environments",
  "94": "Q: self and independent balance | A: detailed · objective testing perspectives",
  "95": "Q: error defect failure | A: Error leads to defect · cause failure",
  "96": "Q: incremental integration | A: one at a time · small groups",
  "97": "Q: evaluation reporting purpose | A: Analyzing test results · assess software quality",
  "98": "Q: test procedures and data | A: Test implementation and execution",
  "99": "Q: objectives and scope phase | A: Test Planning and Control",
  "100": "Q: planning and control involves | A: objectives and scope · testing",
  "101": "Q: Pesticide Paradox principle | A: Repeating the same tests · not reveal new defects",
  "102": "Q: evaluating exit criteria phase | A: readiness · exit criteria",
  "103": "Q: early test design V-Model | A: anticipate and address issues sooner",
  "104": "Q: absence of reported defects | A: Absence-of-Errors Fallacy",
  "105": "Q: independence and objectivity | A: avoid conflicts of interest · unbiased assessments",
  "106": "Q: non-functional testing focuses | A: Performance · security · usability · reliability",
  "107": "Q: who performs test closure | A: Test managers and testers",
  "108": "Q: acceptance testing focus | A: real-world conditions",
  "109": "Q: improve quality effectively | A: most likely to have defects",
  "110": "Q: external services integration | A: seamless interactions · systems or subsystems",
  "111": "Q: follows planning and control | A: Test analysis and design",
  "112": "Q: V-Model requirements phase | A: Acceptance Testing",
  "113": "Q: no independent testing risk | A: developer testing · miss defects",
  "114": "Q: context dependency influence | A: intended use · associated risks",
  "115": "Q: lessons learned important | A: improve future testing cycles · processes",
  "116": "Q: stubs used for | A: Mimicking the behavior · lower-level modules",
  "117": "Q: test conditions before testing | A: clear goals · objectives for the tests",
  "118": "Q: independent testing benefit | A: unbiased view · different defects",
  "119": "Q: psychological barrier testing | A: Lack of clear objectives · constructive feedback",
  "120": "Q: independent vs self-testing | A: unbiased perspective · quality and defects",
  "121": "Q: discrepancies actual expected | A: Documented as incidents · analyzed",
  "122": "Q: exit criteria influence | A: when the test activities should end",
  "123": "Q: heuristics in psychology | A: Mental shortcuts · rules of thumb · experience",
  "124": "Q: exit criteria not met | A: Continue testing · meet the criteria",
  "125": "Q: cognitive processes | A: Cognitive Processes",
  "126": "Q: clear objectives established | A: precise · effective communication · expectations",
  "127": "Q: Pesticide paradox challenge | A: same tests · will not find new defects",
  "128": "Q: transparency and accountability | A: clear and accurate information · stakeholders",
  "129": "Q: post-mortem closure purpose | A: strengths · weaknesses · areas for improvement",
  "130": "Q: V-Model acceptance criteria | A: Acceptance Testing",
  "131": "Q: early testing timeline | A: throughout the development lifecycle",
  "132": "Q: evaluating exit criteria outcome | A: continuation or stoppage · testing",
  "133": "Q: requirements defect costly | A: propagate · later stages · fixing costs",
  "134": "Q: feedback on defects psychology | A: constructive and positive manner",
  "135": "Q: improve future projects | A: documenting defects · future projects",
  "136": "Q: tester vs developer mindset | A: critically evaluates · defects · creating the product",
  "137": "Q: most rigorous testing | A: safety-critical system · automobile",
  "138": "Q: respectful communications effect | A: understanding · cooperation · team members",
  "139": "Q: hinders effective testing | A: Poor communication · defects",
  "140": "Q: V-Model mapping benefit | A: every phase · corresponding validation process",
  "141": "Q: quality assurance aim | A: Prevention of defects · early detection · correction",
  "142": "Q: testing necessary reason | A: identify defects in software",
  "143": "Q: planning manages risks | A: test objectives · risk assessments",
  "144": "Q: professional competence ethics | A: Professional Competence",
  "145": "Q: early testing important | A: before they become · challenging to fix",
  "146": "Q: exhaustive vs risk-based | A: every possible input · precondition",
  "147": "Q: Test Closure activity | A: test closure reports · documentation",
  "148": "Q: automation component testing | A: quick feedback · code quality",
  "149": "Q: start testing early | A: Early testing",
  "150": "Q: developers testers conflicts | A: different mindsets · product",
  "151": "Q: test case review pesticide | A: regularly reviewed and revised · find more defects",
  "152": "Q: managing testware closure | A: Archiving test outputs · environments · future use",
  "153": "Q: primary goal testing | A: quality · reliability · performance",
  "154": "Q: context dependent principle | A: vary depending · software and its environment",
  "155": "Q: communicate about defects | A: Respectfully and constructively",
  "156": "Q: clear objectives effect | A: focused · efficient testing effort",
  "157": "Q: implementation execution purpose | A: execute test cases · log the outcomes",
  "158": "Q: courteous communication role | A: convey defect feedback · effectively",
  "159": "Q: poor communication effect | A: misunderstandings · reduced software quality",
  "160": "Q: modern software challenge | A: complexity and integration · systems",
  "161": "Q: root cause analysis role | A: underlying reasons · defects",
  "162": "Q: context significance principles | A: vary based on the specific context",
  "163": "Q: acceptance testing responsible | A: End-users or clients",
  "164": "Q: defines software testing | A: evaluating a software application · identify defects",
  "165": "Q: exit criteria purpose | A: when a test phase can be concluded",
  "166": "Q: system testing functionality | A: system functions conform · specified requirements",
};

function normalize(str) {
  return (str || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function fragmentInSource(fragment, sources) {
  const f = normalize(fragment);
  if (!f) return false;
  return sources.some((src) => normalize(src.replace(/\.$/, "")).includes(f));
}

const dump = JSON.parse(fs.readFileSync(DUMP, "utf8"));
const failures = [];

for (const q of dump) {
  const kw = KEYWORDS[String(q.id)];
  if (!kw) {
    failures.push({ id: q.id, err: "missing keyword entry" });
    continue;
  }
  const m = kw.match(/^Q:\s(.+?)\s\|\sA:\s(.+)$/s);
  if (!m) {
    failures.push({ id: q.id, err: "bad format", kw });
    continue;
  }
  const sources = [q.answer, q.expl || q.answer];
  const frags = m[2].split(/\s*·\s*/).map((f) => f.trim()).filter(Boolean);
  for (const frag of frags) {
    if (!fragmentInSource(frag, sources)) {
      failures.push({ id: q.id, err: `not verbatim: "${frag}"`, answer: q.answer });
    }
  }
}

if (failures.length) {
  console.error("FAILURES:", failures.length);
  failures.forEach((f) => console.error(JSON.stringify(f)));
  process.exit(1);
}

fs.writeFileSync(OUT, JSON.stringify(KEYWORDS, null, 2) + "\n", "utf8");
console.log(`Wrote ${Object.keys(KEYWORDS).length} keywords to ${OUT}`);
