import { useState } from "react";
import { Header } from "@components/Header";
import { Container } from "./styles";
import { HighLight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { useNavigation } from "@react-navigation/native";
export function Groups(props) {
  const [groups, setGroups] = useState<string[]>([]);
  function handleNewGroup() {}
  props.navigation.navigate("newGroup");

  return (
    <Container>
      <Header />
      <HighLight title="Turmas" subtitle="Jogue com sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma? " />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Criar Nova Turma" onPress={handleNewGroup} />
    </Container>
  );
}
