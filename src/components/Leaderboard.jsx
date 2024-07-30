import React from "react";
import styled from "@emotion/styled";
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Link,
  Paper,
} from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import users from "../data";

const Medal = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

const LeaderboardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const LeaderboardTable = styled(TableContainer)`
  max-width: 56.25rem;
  width: 100%;
`;

const ProfileCell = styled(TableCell)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CenteredTableHeadCell = styled(TableCell)`
  text-align: center;
  font-weight: bold;
  @media (max-width: 37.5rem) {
    font-size: 0.875rem;
  }
`;

const CenteredTableCell = styled(TableCell)`
  text-align: center;
  @media (max-width: 37.5rem) {
    font-size: 0.875rem;
  }
`;

const getMedal = (index) => {
  if (index === 0) return "🥇";
  if (index === 1) return "🥈";
  if (index === 2) return "🥉";
  return "";
};

const Leaderboard = () => {
  const sortedUsers = [...users].sort((a, b) => b.score - a.score);

  return (
    <LeaderboardContainer>
      <LeaderboardTable component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <CenteredTableHeadCell>Rank</CenteredTableHeadCell>
              <CenteredTableHeadCell>Profile</CenteredTableHeadCell>
              <CenteredTableHeadCell>Bio</CenteredTableHeadCell>
              <CenteredTableHeadCell>Hobbies</CenteredTableHeadCell>
              <CenteredTableHeadCell>VedaVerse</CenteredTableHeadCell>
              <CenteredTableHeadCell>LinkedIn</CenteredTableHeadCell>
              <CenteredTableHeadCell>GitHub</CenteredTableHeadCell>
              <CenteredTableHeadCell>Score</CenteredTableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedUsers.map((user, index) => (
              <TableRow key={user.id}>
                <CenteredTableCell>
                  <Medal>{getMedal(index)}</Medal>
                  {index + 1}
                </CenteredTableCell>
                <ProfileCell>
                  <Avatar src={user.profilePicture} />
                  <Typography>{user.name}</Typography>
                </ProfileCell>
                <CenteredTableCell>{user.bio}</CenteredTableCell>
                <CenteredTableCell>{user.hobbies.join(", ")}</CenteredTableCell>
                <CenteredTableCell>
                  <Link
                    href={user.vedaverse}
                    target='_blank'
                    rel='noopener'
                    className='link'
                  >
                    VedaVerse
                  </Link>
                </CenteredTableCell>
                <CenteredTableCell>
                  <Link
                    href={user.linkedin}
                    target='_blank'
                    rel='noopener'
                    className='link'
                  >
                    <LinkedIn />
                  </Link>
                </CenteredTableCell>
                <CenteredTableCell>
                  <Link
                    href={user.github}
                    target='_blank'
                    rel='noopener'
                    className='link'
                  >
                    <GitHub />
                  </Link>
                </CenteredTableCell>
                <CenteredTableCell>{user.score}</CenteredTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </LeaderboardTable>
    </LeaderboardContainer>
  );
};

export default Leaderboard;
