
/*
Course Scheduling System: Priya is a member from the training department of a company who has to prepare a
training plan that has different courses. Few of these courses need some prerequisite courses to be completed.
The goal is to prepare a training plan such that all the courses are included in the correct order and the learning is on track.
*/

#include <bits/stdc++.h>
#include <list>
#include <stack>
using namespace std;

stack<int> Stack;


class Graph {
	int V;

	list<int>* adj;

	// A dfs function used by topologicalSort
	void dfs(int v, bool visited[], stack<int>& Stack);

public:
	Graph(int V);

	void addEdge(int v, int w);

	void topologicalSort();
};

Graph::Graph(int V)
{
	this->V = V;
	adj = new list<int>[V];
}

void Graph::addEdge(int v, int w)
{
	adj[v].push_back(w);
}

void Graph::dfs(int v, bool visited[], stack<int>& Stack)
{
	visited[v] = true;

	list<int>::iterator i;
	for (i = adj[v].begin(); i != adj[v].end(); ++i)
		if (!visited[*i])
			dfs(*i, visited, Stack);

	Stack.push(v);
}

void Graph::topologicalSort()
{
	bool* visited = new bool[V];
	for (int i = 0; i < V; i++)
		visited[i] = false;

	for (int i = 0; i < V; i++)
		if (visited[i] == false)
			dfs(i, visited, Stack);

}


int main()
{
	cout<<"Enter no of Subjects"<<endl;
	int n;
	cin>>n;
	string s[n];
	cout<<"Enter name of subjects"<<endl;
	for(int i=0;i<n;i++)
    {
        cin>>s[i];
    }

	Graph g(n);
	cout<<"Enter number of prerequisite"<<endl;
    int p;
    cin>>p;
	for(int i=0;i<n;i++)
    {
        cout<<i<<" - "<<s[i] <<endl;
    }
    cout<<"Enter prerequisite"<<endl;
    while(p)
    {
        int in1,in2;
        cin>>in1>>in2;
        g.addEdge(in1, in2);
        p--;
    }


	cout << "Order of Given Subjects Should be"<<endl;
	g.topologicalSort();
	while (Stack.empty() == false) {
		cout << <<Stack.top()<<" "s[Stack.top()] <<endl;
		Stack.pop();
	}

	return 0;
}
