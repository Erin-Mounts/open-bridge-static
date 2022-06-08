import massgeneral_logo from '@assets/about/massgeneral.svg'
import northwestern_logo from '@assets/about/northwesternu.svg'
import penstate_logo from '@assets/about/pennstate.svg'
import ucsandiego_logo from '@assets/about/ucsandiego.svg'
import ucsf_logo from '@assets/about/ucsf.svg'
import udelaware_logo from '@assets/about/udelaware.svg'
import washu_logo from '@assets/about/washu.svg'
import LMangravite from '@assets/l_mangravite.jpg'
import MSliwinski from '@assets/m_sliwinski.jpg'
import RGershon from '@assets/r_gershon.jpg'
import sagebio_logo from '@assets/sage_bio_logo.svg'
import PageShell from '@components/widgets/PageShell'
import {Section} from '@components/widgets/Styled'
import ClearIcon from '@mui/icons-material/Clear'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTitleProps,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import {buttonClasses} from '@mui/material/Button'
import {alpha, styled} from '@mui/material/styles' //vs mui/styles
import Tooltip, {tooltipClasses, TooltipProps} from '@mui/material/Tooltip'
import {Box} from '@mui/system'
import {colors, latoFont} from '@style/theme'
import React, {FunctionComponent} from 'react'

const orgImages: Map<string, string> = new Map([
  [northwestern_logo, 'Northwestern University'],
  [sagebio_logo, 'Sage Bionetworks'],
  [penstate_logo, 'Penn State'],
  [massgeneral_logo, 'Massachusets General Hospital'],
  [ucsandiego_logo, 'University of California San Diego'],
  [ucsf_logo, 'University of California San Francisco'],
  [udelaware_logo, 'University of Delaware'],
  [washu_logo, 'Washington University in St. Louis'],
])

const ContributorContainer = styled('div')(({theme}) => ({
  display: 'flex',
  border: '1px solid #DCDCDC',
  height: '450px',
}))

const StyledH1 = styled('h1')(({theme}) => ({
  fontFamily: latoFont,
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '24px',
  lineHeight: '28px',
  textAlign: 'center',
  color: '#353A3F',
  marginBottom: theme.spacing(10),
}))

//styleName: Body/Body Text 1;
const BodyText1 = styled('p')(({theme}) => ({
  fontFamily: 'Lato',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '20px',
  letterSpacing: '0px',
  textAlign: 'left',
  color: '#000',
}))

const StyledH2 = styled('h2')(({theme}) => ({
  fontFamily: latoFont,
  fontSize: '20px',
  fontWeight: 400,
  lineHeight: '24px',
  marginBottom: theme.spacing(10),
  color: '#000',
}))

const LogoContainer = styled('div')<{rowIndex: number}>(
  ({theme, rowIndex}) => ({
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(10),
    '&> img, > svg': {
      margin: theme.spacing(0, 11),
      flexGrow: 0,
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: rowIndex == 1 ? theme.spacing(0) : theme.spacing(10),
      flexDirection: rowIndex == 1 ? 'column' : 'row',
      flexWrap: 'wrap',
      '&> img, > svg': {
        margin: theme.spacing(5, 2),
        flexGrow: 0,
      },
    },
  })
)

const StyledSelect = styled(TextField)(({theme}) => ({
  margin: '0 auto',
  border: 'none',
  minWidth: '300px',
  '& .MuiOutlinedInput-notchedOutline': {
    // border: '1px solid #515359',
    border: 'none',
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    //  border: '1px solid #515359',
  },

  '& .MuiOutlinedInput-root': {
    border: '1px solid #515359',
    '& :hover': {
      //  border: '1px solid #515359',
    },
  },

  '& .MuiSelect-select': {
    color: '#515359',
  },
}))
const StyledMenuItem = styled(MenuItem)(({theme}) => ({
  color: 'black',
  '&.Mui-selected, &.Mui-selected:hover': {
    backgroundColor: alpha('#D7665A', 0.15),

    '& > .MuiListItemText-root': {
      // color: '#515359',
    },
  },
}))

const OrgList = styled('div')(({theme}) => ({
  borderRight: '1px solid #DCDCDC',
  marginTop: theme.spacing(5),
  width: theme.spacing(64),
  flexShrink: 0,

  '& .MuiList-root': {
    paddingTop: 0,

    '& > .MuiButtonBase-root': {
      '& > .MuiListItemText-root': {
        color: '#515359',
      },
      '&.Mui-selected, &.Mui-selected:hover': {
        backgroundColor: alpha('#D7665A', 0.15),

        '& > .MuiListItemText-root': {
          // color: '#515359',
        },
      },
    },
  },
}))

const Contributors = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  height: '100%',
  width: '100%',
  backgroundColor: '#FBFBFC',
  overflow: 'scroll',
}))

const Photos = styled('div')(({theme}) => ({
  padding: theme.spacing(10, 0, 0, 10),

  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',

  backgroundColor: '#fff',
  width: '100%',
  color: '#000',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(5, 0, 0, 5),
  },
  '& .MuiButton-textPrimary': {
    fontWeight: '900',
    color: '#fff',
  },
}))

const PhotoContainer = styled('div')(({theme}) => ({
  textAlign: 'center',
  width: '122px',
  marginBottom: theme.spacing(10),
  marginRight: theme.spacing(19),
  cursor: 'pointer',
  '& figure': {
    margin: 0,
  },
  '& img': {
    width: '70px',
    height: '70px',
  },
  '& figcaption': {
    marginTop: theme.spacing(2),
    color: 'black',
    display: 'block',
    fontSize: '14px',

    fontFamily: latoFont,
    fontWeight: 900,
    '> span': {
      display: 'block',
      fontStyle: 'italic',
      fontWeight: '400',
    },
  },
  [theme.breakpoints.down('md')]: {
    marginRight: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
}))

const StyledTitle = styled(({className, ...props}: DialogTitleProps) => (
  <DialogTitle {...props} classes={{root: className}} />
))(({theme}) => ({
  fontFamily: latoFont,
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '16px',
  color: '#4A5056',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(1),

  '&> div': {
    borderBottom: '1px solid #EAECEE',
    paddingBottom: theme.spacing(3),
  },

  '& strong': {
    fontSize: '18px',
    color: '#22252A',
  },
  '& i': {
    fontWeight: 400,
    color: '#22252A',
  },
  '& .MuiIconButton-root': {
    top: '10px',
    right: '10px',
    position: 'absolute',
    padding: theme.spacing(1),
  },
}))

const StyledTooltip = styled(({className, ...props}: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{popper: className}}
    PopperProps={{
      popperOptions: {
        strategy: 'fixed',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -5],
            },
          },
        ],
      },
    }}
  />
))(({theme}) => ({
  [`& .${tooltipClasses.tooltipPlacementBottom}`]: {
    margin: '0 100px',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 220,
    fontStyle: 'italic',

    fontWeight: 400,
    fontSize: '14px',
    backgroundColor: '#63676C',

    [`& .${buttonClasses.textPrimary}`]: {
      display: 'block',
      color: '#fff',
      fontWeight: 900,
      paddingLeft: 0,
      textTransform: 'none',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
}))

const OrgInfo = styled('div')(({theme}) => ({
  padding: theme.spacing(10, 12, 13, 12),
}))

type Contributor = {
  name: string

  orgName?: string
  title?: string
  bio?: React.ReactNode
  photo: string
}

type Data = {
  orgName: string
  orgDescription: string
  orgLogo?: string
  people: Contributor[]
}

const AboutUs: FunctionComponent<{onJoin: () => void}> = ({onJoin}) => {
  const [currentOrgIndex, setCurrentOrgIndex] = React.useState(0)
  const [currentContributor, setCurrentContributor] = React.useState<
    Contributor | undefined
  >(undefined)
  const handleListItemClick = (index: number) => {
    setCurrentOrgIndex(index)
  }
  return (
    <PageShell islight={true} onJoin={onJoin}>
      <Section>
        <Typography variant="h2" textAlign="left" mb={6}>
          About Us
        </Typography>
        <Typography variant="body1" maxWidth="700px" mb={6}>
          Mobile Toolbox comprises a team of clinical colleagues, cognition
          researchers, measurement scientists and technical experts with proven
          success in multiple large-scale validation and development projects.
        </Typography>
      </Section>
      <Box bgcolor={colors.purpleTransparency2}>
        <Section mb={13}>
          <Typography variant="h3" textAlign="center" mb={10}>
            Our Partners
          </Typography>
          <LogoContainer rowIndex={1}>
            {Array.from(orgImages.keys())
              .slice(0, 3)
              .map((src, index) => (
                <img src={src} alt={orgImages.get(src)} key={src} />
              ))}
          </LogoContainer>
          <LogoContainer rowIndex={2}>
            {Array.from(orgImages.keys())
              .slice(3, 8)
              .map((src, index) => (
                <img src={src} alt={orgImages.get(src)} key={src} />
              ))}
          </LogoContainer>
        </Section>
      </Box>
      {/*
        <StyledH1>Select a Partner to View Our Contributors</StyledH1>
        <Hidden mdUp>
          <Box textAlign="center">
            <StyledSelect
              id="select org"
              select
              value={currentOrgIndex}
              onChange={(e: any) =>
                handleListItemClick(parseInt(e.target.value))
              }
              helperText="Please select">
              {data.map((item, index) => (
                <StyledMenuItem key={item?.orgName} value={index}>
                  {item?.orgName}
                </StyledMenuItem>
              ))}
            </StyledSelect>
          </Box>
        </Hidden>
        <ContributorContainer id="contributorContainer">
          <Hidden mdDown>
            <OrgList id="left">
              <List component="nav" aria-label="Our Partners">
                {data.map((item, index) => (
                  <ListItemButton
                    key={item.orgName}
                    selected={currentOrgIndex === index}
                    onClick={event => handleListItemClick(index)}>
                    {' '}
                    <ListItemText primary={item.orgName} />
                  </ListItemButton>
                ))}
              </List>
            </OrgList>
          </Hidden>

          <Contributors id="right">
            <Photos>
              {data[currentOrgIndex].people.map((person, index) => (
                <PhotoContainer
                  key={person.name + index}
                  onClick={() => setCurrentContributor(person)}>
                  <StyledTooltip
                    arrow
                    placement="bottom"
                    title={
                      <div>
                        {person.title}
                        {person.bio && (
                          <Button
                            variant="text"
                            onClick={() => setCurrentContributor(person)}>
                            View bio &gt;
                          </Button>
                        )}
                      </div>
                    }>
                    <figure>
                      {person.photo.length > 5 ? (
                        <img
                          src={person.photo}
                          title={person.name}
                          alt={person.name}
                        />
                      ) : (
                        <div
                          style={{
                            width: '70px',
                            height: '70px',
                            border: '1px solid black',
                            margin: '0 auto',
                            borderRadius: '50%',
                          }}></div>
                      )}
                      <figcaption>
                        {person.name}
                        {person.orgName && <span> {person.orgName}</span>}
                      </figcaption>
                    </figure>
                  </StyledTooltip>
                </PhotoContainer>
              ))}
            </Photos>
            <OrgInfo>
              <StyledH2>{data[currentOrgIndex].orgName}</StyledH2>
              <BodyText1>{data[currentOrgIndex].orgDescription}</BodyText1>
            </OrgInfo>
          </Contributors>
        </ContributorContainer>*/}
      <Section>
        <Typography variant="h3" textAlign="center">
          Our Leadership Team
        </Typography>
        <Grid container rowSpacing={8} mt={6} columnSpacing={{xs: 4, lg: 10}}>
          <Grid item xs={12} lg={3} textAlign="center">
            <img src={LMangravite} alt="Lara Mangravite" width="156px" />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Typography component="p" variant="body1" maxWidth="700px">
              Lara Mangravite, PhD, is President of Sage Bionetworks, an
              organization that focuses on open practices to advance biomedicine
              through data-driven science and digital research. Recognizing that
              all research is limited by restrictions placed on the distribution
              of information, Dr. Mangravite works closely with institutes,
              foundations and research communities to improve information flow,
              benchmark research practices, and establish research outcomes of
              sufficient confidence to support translation.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={3} textAlign="center">
            <img src={MSliwinski} alt="Martin Sliwinski" width="156px" />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Typography component="p" variant="body1" maxWidth="700px">
              Martin Sliwinski, PhD, of Penn State University, is currently
              leading Mobile Monitoring of Cognitive Change (M2C2), working to
              using smartphones to measure cognitive function and subtle
              variations in cognitive performance in the context of everyday
              life. Dr. Sliwinski aims to develop infrastructure that provides
              the research community with open, flexible, and usable tools to
              enable scientific progress that depends on the sensitive and
              accurate measurement of cognitive change.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={3} textAlign="center">
            <img src={RGershon} alt="Richard Gershon" width="156px" />
          </Grid>
          <Grid item xs={12} lg={9}>
            <Typography component="p" variant="body1" maxWidth="700px">
              Richard Gershon, PhD, of Northwestern University, is widely
              recognized for his expertise in advancing the use of technology
              for increasing the impact and reach of psychometrically robust
              health measurements. Dr. Gershon is the contact principal
              investigator for The Mobile Toolbox for Monitoring Cognitive
              Function, MyCog: Rapid detection of cognitive impairment in
              everyday clinical settings, and ARMADA: Advancing Reliable
              Measurement in Alzheimer’s Disease and cognitive Aging.
            </Typography>
          </Grid>
        </Grid>
      </Section>

      <Dialog
        open={currentContributor !== undefined}
        onClose={() => setCurrentContributor(undefined)}>
        <StyledTitle>
          <IconButton
            onClick={() => setCurrentContributor(undefined)}
            title="close">
            <ClearIcon />
          </IconButton>
          <div>
            <strong>{currentContributor?.name}</strong>
            <br />
            <i>{currentContributor?.title}</i>
          </div>
        </StyledTitle>
        <DialogContent sx={{color: 'black'}}>
          {currentContributor?.bio}
        </DialogContent>
      </Dialog>
    </PageShell>
  )
}

export default AboutUs
