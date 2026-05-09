import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import ScoreButton from '../components/ScoreButton';

export default function ScoreScreen() {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);

  return (
    <View style={styles.container}>

      <View style={styles.teamContainer}>

        <View style={styles.teamBox}>
          <Text style={styles.teamTitle}>TEAM A</Text>

          <Text style={styles.score}>{teamA}</Text>

          <ScoreButton
            title="+1 Point"
            onPress={() => setTeamA(teamA + 1)}
          />

          <ScoreButton
            title="+2 Points"
            onPress={() => setTeamA(teamA + 2)}
          />

          <ScoreButton
            title="+3 Points"
            onPress={() => setTeamA(teamA + 3)}
          />
           </View>

        <View style={styles.teamBox}>
          <Text style={styles.teamTitle}>TEAM B</Text>

          <Text style={styles.score}>{teamB}</Text>

          <ScoreButton
            title="+1 Point"
            onPress={() => setTeamB(teamB + 1)}
          />

          <ScoreButton
            title="+2 Points"
            onPress={() => setTeamB(teamB + 2)}
          />

          <ScoreButton
            title="+3 Points"
            onPress={() => setTeamB(teamB + 3)}
          />
        </View>
      </View>
       < TouchableOpacity style={styles.resetButton}
        onPress={() => {
          setTeamA(0);
          setTeamB(0);
        }}
      >
        <Text style={styles.resetText}>RESET</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    },
  teamBox: {
    alignItems: 'center',
  },
  teamTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 80,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  resetButton: {
    marginTop: 40,
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    },
  resetText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});